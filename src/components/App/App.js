import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ItemModal from "../ItemModal/ItemModal";
import React, { useEffect, useState } from "react";
import {
  getWeatherAndLocation,
  locationData,
  parseWeatherData,
} from "../../utils/WeatherApi";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import {
  getItems,
  postItems,
  deleteItems,
  likeCard,
  likeRemove,
  setUserInfo,
} from "../../utils/api";

// import login and register modals here
import Register from "../RegisterModal/RegisterModal";
import Login from "../LoginModal/LoginModal";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as auth from "../../utils/auth";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedcard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [loggedIn, isLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const token = localStorage.getItem("token");

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const handleOpenModal = (modalType) => {
    setActiveModal(modalType);
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleCardLike = async ({ id, isLiked }) => {
    console.log({ isLiked });
    try {
      let updatedCard;
      // destucture inner card values
      if (isLiked) {
        const { data, ...props } = await likeCard(id, token);
        updatedCard = { ...data, ...props, isLiked: true };
      } else {
        await likeRemove(id, token);
        const cardToUpdate = clothingItems.find((c) => c._id === id);

        if (cardToUpdate) {
          const { data, ...props } = await likeRemove(id, token);
          updatedCard = { ...data, ...props, isLiked: false };
        } else {
          console.error(`Card with id ${id} not found in clothingItems.`);
          return;
        }
      }

      setClothingItems((cards) =>
        cards.map((c) => (c._id === id ? updatedCard : c))
      );
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteCard = async () => {
    try {
      await deleteItems(selectedcard._id, token);
      setClothingItems((prevItems) =>
        prevItems.filter((item) => item._id !== selectedcard._id)
      );
      handleCloseModal();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const onAddItem = async (values) => {
    try {
      const res = await postItems(values, token);
      setClothingItems((prevItems) => [res, ...prevItems]);
      handleCloseModal();
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleToggleSwitchChange = async () => {
    try {
      if (currentTemperatureUnit === "C") {
        setCurrentTemperatureUnit("F");
      } else {
        setCurrentTemperatureUnit("C");
      }
    } catch (error) {
      console.error("Error from toggle switch: ", error);
    }
  };

  const onEdit = async (values) => {
    console.log(values);
    try {
      const res = await setUserInfo(values, token);
      console.log(res);
      setCurrentUser(res.data);
      handleCloseModal();
      return res.data;
    } catch (error) {
      console.error("Error from onEdit: ", error);
    }
  };

  useEffect(() => {
    getWeatherAndLocation()
      .then((data) => {
        const temperature = parseWeatherData(data);
        const city = locationData(data);
        setTemp(temperature);
        setCity(city);
        // setType(parseWeatherType(data))
        // setTime(Date.now())
      })
      .catch((error) => {
        console.error("Error: An error occurred", error);
      });
  }, []);

  useEffect(() => {
    if (token) {
      auth
        .checkToken(token)
        .then((userData) => {
          setCurrentUser(userData);
          isLoggedIn(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [loggedIn, token]);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(
          items.map((item) => ({
            ...item,
            isLiked: items[item._id] || true,
          }))
        );
      })
      .catch((error) => {
        console.error("Error: An error occurred", error);
      });
  }, []);

  return (
    <CurrentUserContext.Provider
      value={{ setCurrentUser, currentUser }}
      path="/profile"
    >
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          city={city}
          currentDate={currentDate}
          isLoggedIn={loggedIn}
          onClick={handleOpenModal}
        ></Header>

        <Switch>
          <ProtectedRoute loggedIn={loggedIn} path="/profile">
            <Profile
              currentUser={currentUser}
              clothingItems={clothingItems}
              loggedIn={loggedIn}
              setCurrentUser={setCurrentUser}
              onCardLike={handleCardLike}
              isLoggedIn={isLoggedIn}
              onSelectCard={handleSelectedCard}
              onClick={handleOpenModal}
            ></Profile>
          </ProtectedRoute>

          <Route path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              setClothingItems={clothingItems}
              onCardLike={handleCardLike}
              loggedIn={loggedIn}
            />
            {activeModal === "register" && (
              <Route path="/register">
                <Register
                  handleCloseModal={handleCloseModal}
                  isLoggedIn={isLoggedIn}
                  onClick={handleOpenModal}
                  setCurrentUser={setCurrentUser}
                  setIsLoading={setIsLoading}
                  isLoading={isLoading}
                />
              </Route>
            )}
            {activeModal === "login" && (
              <Route path="/login">
                <Login
                  handleCloseModal={handleCloseModal}
                  isLoggedIn={isLoggedIn}
                  onClick={handleOpenModal}
                  setIsLoading={setIsLoading}
                  isLoading={isLoading}
                />
              </Route>
            )}
          </Route>
        </Switch>

        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            onAddItem={onAddItem}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            currentUser={currentUser}
            selectedCard={selectedcard}
            onClose={handleCloseModal}
            onClick={handleOpenModal}
            loggedIn={loggedIn}
          />
        )}
        {activeModal === "delete" && (
          <DeleteItemModal
            onClose={handleCloseModal}
            deleteCard={handleDeleteCard}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
        )}
        {activeModal === "edit" && (
          <EditProfileModal
            onClose={handleCloseModal}
            setCurrentUser={setCurrentUser}
            onEdit={onEdit}
            setIsLoading={setIsLoading}
            isLoading={isLoading}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
