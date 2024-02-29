// // // import { useState, useEffect } from "react";

// // // const APIkey = "039e78b473a24e26b14a84073cc259b5";

// // // const [location, setLocation] = useState();
// // // const [data, setData] = useState([]);

// // // function getLocationInfo(latitude, longitude) {
// // //   const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`;
// // //   fetch(url)
// // //     .then((response) => response.json())
// // //     .then((data) => {
// // //       setData(data);
// // //       if (data.status.code === 200) {
// // //         setLocation(data.results[0].formatted);
// // //       } else {
// // //         console.log("Reverse geolocation request failed.");
// // //       }
// // //     })
// // //     .catch((error) => console.error(error));
// // // }
// // // function success(pos) {
// // //   let crd = pos.coords;
// // //   console.log("Your current position is:");
// // //   console.log(`Latitude : ${crd.latitude}`);
// // //   console.log(`Longitude: ${crd.longitude}`);
// // //   console.log(`More or less ${crd.accuracy} meters.`);
// // //   getLocationInfo(crd.latitude, crd.longitude);
// // // }
// // // function errors(err) {
// // //   console.warn(`ERROR(${err.code}): ${err.message}`);
// // // }
// // // let options = {
// // //   enableHighAccuracy: true,
// // //   timeout: 5000,
// // //   maximumAge: 0,
// // // };
// // // useEffect(() => {
// // //   if (navigator.geolocation) {
// // //     navigator.permissions
// // //       .query({ name: "geolocation" })
// // //       .then(function (result) {
// // //         console.log(result);
// // //         if (result.state === "granted") {
// // //           navigator.geolocation.getCurrentPosition(success, errors, options);
// // //         } else if (result.state === "prompt") {
// // //           navigator.geolocation.getCurrentPosition(success, errors, options);
// // //         } else if (result.state === "denied") {
// // //         }
// // //       });
// // //   } else {
// // //     console.log("Geolocation is not supported by this browser.");
// // //   }
// // // }, []);

// // // // Code for weather api, that I can't figure out how to work
// // // function Weather() {
// // //   const [latitude, setLat] = React.useState("");
// // //   const [longitude, setLong] = React.useState("");
// // //   const [city, setCity] = React.useState("");
// // //   React.useEffect(() => {
// // //     navigator.geolocation.getCurrentPosition((position) => {
// // //       setLat(position.coords.latitude);
// // //       setLong(position.coords.longitude);
// // //     });

// // //     let WeatherFinalAPIEndPoint = `${WeatherAPIEndPoint}lat=${latitude}&lon=${longitude}&appid=${WeatherAPIKey}`;

// // //     axios.get(WeatherFinalAPIEndPoint).then((response) => {
// // //       setCity(city.data);
// // //     });
// // //   }, []);
// // //   return (
// // //     <div>
// // //       <h1>{setCity.name}</h1>
// // //     </div>
// // //   );
// // // }

// // // export default Weather;

// // // const [isLoading, setIsLoading] = React.useState(false);
// // // ^^ add later for better code

// // // old code for register
// // // register(values).then(setCurrentUser(currentUser));

// // // try {
// // //   const res = await register(values);
// // // } catch (error) {
// // //   console.log(error);
// // // }
// // // .then(() => {
// // //   setCurrentUser(currentUser);
// // // });
// // // .then(isLoggedIn(true));
// // // console.log(res); // undefined

// // //  maybe maybe not use for login
// // // const getCurrentUserId = async () => {
// // //   try {
// // //     const userId = await getCurrentUser(currentUser._id);
// // //     console.log(userId);
// // //   } catch (error) {
// // //     console.log(error);
// // //   }
// // // };

// // // recomend taking a look at

// // // our protected routes should look like this // notice that we're
// // // passing userData to the second route
// // // <ProtectedRoute
// // //   path="/ducks"
// // //   loggedIn={this.state.loggedIn}
// // //   component={Ducks}
// // // />
// // // <ProtectedRoute
// // //   path="/my-profile"
// // //   loggedIn={this.state.loggedIn}
// // //   userData={this.state.userData}
// // //   component={MyProfile}
// // // />

// // // code that makes it impossible to see anything but the login modal
// // // if not authorized
// // // {
// // //   loggedIn ? (
// // //     <Main
// // //       weatherTemp={temp}
// // //       onSelectCard={handleSelectedCard}
// // //       setClothingItems={clothingItems}
// // //     />
// // //   ) : (
// // //     <Redirect to="/login" />
// // //   );
// // // }

// // // code that you need later to auto signin and remember users later
// // // work on function below to get the user token
// // // for login
// // // inside of App.js

// // // tokenCheck() {
// // //   // if the user has a token in localStorage,
// // //   // this function will check that the user has a valid token
// // //   const jwt = localStorage.getItem('jwt');
// // //   if (jwt) {
// // //     // we'll verify the token
// // //     auth.getContent(jwt).then((res) => {
// // //       if (res) {
// // //         // we can get the user data here!
// // //         const userData = {
// // //           username: res.username,
// // //           email: res.email
// // //         }
// // //         // let's put it in the state inside App.js
// // //         this.setState({
// // //           loggedIn: true,
// // //           userData
// // //         }, () => {
// // //           this.props.history.push('/ducks');
// // //         });
// // //       }
// // //     });
// // //   }
// // // }

// // import { createContext, useContext, useState, useEffect } from "react";
// // /**
// //  * auth = getAuth()
// //  * provider = new GoogleAuthProvider()
// //  */
// // import { auth, provider } from "providers/firebase";
// // import {
// //   getAuth,
// //   onAuthStateChanged,
// //   signInWithPopup,
// //   signOut as firebaseSignOut,
// // } from "firebase/auth";
// // import { api } from "providers/axios";
// // import { useLoading } from "providers/loading";

// // const UserContext = createContext(null);
// // export const useAuth = () => useContext(UserContext);

// // const verifyToken = (token) =>
// //   api({
// //     method: "post",
// //     url: "/user/auth",
// //     headers: {
// //       token,
// //     },
// //   });

// // const UserProvider = (props) => {
// //   const [user, setUser] = useState(null);
// //   const { loading, setLoading } = useLoading();

// //   const signIn = async () => {
// //     setLoading(true);
// //     try {
// //       const result = await signInWithPopup(auth, provider);
// //       console.log("auth signInWithPopup", result.user.email);
// //     } catch (e) {
// //       setUser(null);
// //       console.error(e);
// //       setLoading(false);
// //     }
// //   };

// //   const signOut = async () => {
// //     let userSigningOut = user;
// //     try {
// //       await firebaseSignOut(auth);
// //       setUser(null);
// //       console.log("signed out");
// //     } catch (e) {
// //       console.error(e);
// //     } finally {
// //       return (userSigningOut = null);
// //     }
// //   };

// //   const verifyUser = async (user) => {
// //     try {
// //       if (!user) {
// //         throw "no user";
// //       }

// //       const token = await getAuth().currentUser.getIdToken(true);
// //       if (!token) {
// //         throw "no token";
// //       }

// //       const jwt = await getAuth().currentUser.getIdTokenResult();
// //       if (!jwt) {
// //         throw "no jwt";
// //       }

// //       const verifyTokenResponse = await verifyToken(token);
// //       if (verifyTokenResponse.data.role !== jwt.claims.role) {
// //         throw "role level claims mismatch";
// //       } else {
// //         user.verifiedToken = verifyTokenResponse.data;
// //         console.log(`User ${user.uid} verified`);
// //         setUser(user);
// //       }
// //     } catch (e) {
// //       signOut();
// //       console.error(e);
// //     }
// //   };

// //   useEffect(() => {
// //     const unsubscribe = onAuthStateChanged(auth, async (user) => {
// //       setLoading(true);
// //       try {
// //         if (user) {
// //           console.log("onAuthStateChanged", user?.email);
// //           await verifyUser(user);
// //         } else {
// //           throw "no user";
// //         }
// //       } catch (e) {
// //         console.error(e);
// //       } finally {
// //         setLoading(false);
// //       }
// //     });
// //     return unsubscribe;
// //   }, []);

// //   return (
// //     <UserContext.Provider
// //       value={{
// //         signIn,
// //         signOut,
// //         user,
// //       }}
// //     >
// //       {props.children}
// //     </UserContext.Provider>
// //   );
// // };
// // export default UserProvider;

// // // MyProfile.js
// // // review code below, compare it to current code

// // // import React from "react";
// // // import NavBar from "./NavBar.js";
// // // import "./styles/MyProfile.css";

// // // function MyProfile(props) {
// // //   let { username, email } = props.userData;
// // //   return (
// // //     <>
// // //       <NavBar />
// // //       <div className="my-profile">
// // //         <div className="my-profile__container">
// // //           <div className="my-profile__header">
// // //             <p> My profile </p> <hr className="my-profile__rule" />
// // //           </div>{" "}
// // //           <div className="my-profile__info">
// // //             <div className="my-profile__user">
// // //               <p className="my-profile__key"> Username: </p>{" "}
// // //               <p className="my-profile__value"> {username} </p>{" "}
// // //             </div>{" "}
// // //             <div className="my-profile__user">
// // //               <p className="my-profile__key"> Email: </p>{" "}
// // //               <p className="my-profile__value"> {email} </p>{" "}
// // //             </div>{" "}
// // //           </div>{" "}
// // //         </div>{" "}
// // //       </div>{" "}
// // //     </>
// // //   );
// // // }

// // // export default MyProfile;
//  // old db.json
//  {
//   "items": [
//     {
//       "_id": 0,
//       "name": "Beanie",
//       "weather": "cold",
//       "imageUrl": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Beanie.png?etag=bc10497cc80fa557f036e94f9999f7b2"
//     },
//     {
//       "_id": 1,
//       "name": "Boot",
//       "weather": "cold",
//       "imageUrl": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Boot.png?etag=0953a2ea59f1c6ebc832fabacdc9c70e"
//     },
//     {
//       "_id": 2,
//       "name": "Cap",
//       "weather": "hot",
//       "imageUrl": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591"
//     },
//     {
//       "_id": 3,
//       "name": "Coat",
//       "weather": "cold",
//       "imageUrl": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Coat.png?etag=298717ed89d5e40b1954a1831ae0bdd4"
//     },
//     {
//       "_id": 4,
//       "name": "Dress",
//       "weather": "hot",
//       "imageUrl": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Dress.png?etag=1f9cd32a311ab139cab43494883720bf"
//     },
//     {
//       "_id": 5,
//       "name": "Hoodie",
//       "weather": "cold",
//       "imageUrl": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Hoodie.png?etag=5f52451d0958ccb1016c78a45603a4e8"
//     },
//     {
//       "_id": 7,
//       "name": "Jeans",
//       "weather": "warm",
//       "imageUrl": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Jeans.png?etag=58345e8bef1ce5f95ac882e71d309e6c"
//     },
//     {
//       "_id": 8,
//       "name": "Loafers",
//       "weather": "warm",
//       "imageUrl": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Loafers.png?etag=dc2d6e1ca7b297597406e35c40aef030"
//     },
//     {
//       "_id": 9,
//       "name": "Sandals",
//       "weather": "hot",
//       "imageUrl": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sandals.png?etag=9bea85a77c0306586d2b71a33b626d41"
//     },
//     {
//       "_id": 11,
//       "name": "Shorts",
//       "weather": "Hot",
//       "imageUrl": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Shorts.png?etag=d728c496643f610de8d8fea92dd915ba"
//     },
//     {
//       "_id": 12,
//       "name": "Skirt",
//       "weather": "hot",
//       "imageUrl": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Skirt.png?etag=27a6bea7e1b63218820d615876fa31d1"
//     },
//     {
//       "_id": 13,
//       "name": "Sneakers",
//       "weather": "warm",
//       "imageUrl": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sneakers.png?etag=3efeec41c1c78b8afe26859ca7fa7b6f"
//     },
//     {
//       "_id": 14,
//       "name": "Sunglasses",
//       "weather": "hot",
//       "imageUrl": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sunglasses.png?etag=a1bced9e331d36cb278c45df51150432"
//     },
//     {
//       "_id": 15,
//       "name": "Sweatshirt",
//       "weather": "warm",
//       "imageUrl": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Sweatshirt.png?etag=008a9674757bea2e0bdb31242e364be0"
//     },
//     {
//       "_id": 16,
//       "name": "T-Shirt",
//       "weather": "hot",
//       "imageUrl": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/T-Shirt.png?etag=44ed1963c44ab19cd2f5011522c5fc09"
//     },
//     {
//       "id": 1701137679821,
//       "name": "test",
//       "imageUrl": "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF0c3xlbnwwfHwwfHx8MA%3D%3D",
//       "weather": "hot",
//       "_id": 18
//     },
//     {
//       "id": "1701179729263-has3fy",
//       "name": "",
//       "imageUrl": "",
//       "weather": "",
//       "_id": 28
//     },
//     {
//       "id": "1701179745570-bhbp4v",
//       "name": "",
//       "imageUrl": "",
//       "weather": "",
//       "_id": 29
//     },
//     {
//       "id": "1701201314659-irt1mv",
//       "name": "test",
//       "imageUrl": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=2608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "weather": "hot",
//       "_id": 37
//     },
//     {
//       "_id": 51
//     },
//     {
//       "_id": 53
//     },
//     {
//       "_id": 54
//     },
//     {
//       "_id": 55
//     },
//     {
//       "_id": "1701206448005-4lklmu",
//       "name": "test",
//       "imageUrl": "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF0c3xlbnwwfHwwfHx8MA%3D%3D",
//       "weather": "hot"
//     },
//     {
//       "_id": 56
//     },
//     {
//       "_id": 57
//     },
//     {
//       "_id": "1701259643407-vhd4wl",
//       "name": "test",
//       "imageUrl": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=2608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "weather": "cold"
//     },
//     {
//       "_id": 58
//     },
//     {
//       "_id": 59
//     },
//     {
//       "_id": "1701273881830-outn4s",
//       "name": "test",
//       "imageUrl": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=2608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "weather": "hot"
//     },
//     {
//       "_id": "1701275395732-5ojlpf",
//       "name": "test",
//       "imageUrl": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=2608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "weather": "hot"
//     },
//     {
//       "_id": "1701283338884-ym3r6t",
//       "name": "test",
//       "imageUrl": "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF0c3xlbnwwfHwwfHx8MA%3D%3D",
//       "weather": "hot"
//     },
//     {
//       "_id": "1701283355461-tw12t2",
//       "name": "test",
//       "imageUrl": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=2608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "weather": "hot"
//     },
//     {
//       "_id": "1701283530124-drtmm0",
//       "name": "test",
//       "imageUrl": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=2608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "weather": "hot"
//     },
//     {
//       "_id": "1701283582685-qe46y8",
//       "name": "test",
//       "imageUrl": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=2608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "weather": "hot"
//     },
//     {
//       "_id": "1701283609070-4uqrtf",
//       "name": "test",
//       "imageUrl": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=2608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "weather": "hot"
//     },
//     {
//       "_id": "1701301299702-vgaj27",
//       "name": "test",
//       "imageUrl": "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF0c3xlbnwwfHwwfHx8MA%3D%3D",
//       "weather": "hot"
//     },
//     {
//       "_id": "1701350912383-zfr1ec",
//       "name": "test",
//       "imageUrl": "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF0c3xlbnwwfHwwfHx8MA%3D%3D",
//       "weather": "hot"
//     },
//     {
//       "_id": "1701351135633-0edb1d",
//       "name": "test",
//       "imageUrl": "https://images.unsplash.com/photo-1529958030586-3aae4ca485ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGF0c3xlbnwwfHwwfHx8MA%3D%3D",
//       "weather": "hot"
//     },
//     {
//       "_id": "1701362605110-dfw8e9",
//       "name": "test",
//       "imageUrl": "https://images.unsplash.com/photo-1694501898581-49fd192e65fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
//       "weather": "hot"
//     },
//     {
//       "_id": "1701385750730-wmn9mj",
//       "name": "test",
//       "imageUrl": "https://images.unsplash.com/photo-1534215754734-18e55d13e346?q=80&w=2608&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       "weather": "hot"
//     }
//   ]
// }
