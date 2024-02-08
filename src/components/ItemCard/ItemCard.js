import "./ItemCard.css";
import heartButton from "../../images/heartButton.svg";
import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemCard = ({ item, onSelectCard, onCardLike, loggedIn }) => {
  const handleLike = () => {
    onCardLike({ id: item._id, isLiked: !item.isLiked });
  };
  const { currentUser } = React.useContext(CurrentUserContext);

  console.log(item.isLiked);
  console.log(item.likes);

  const likeButtonClassName = `card_like ${
    item.likes.includes(currentUser._id)
      ? "card_like-visible"
      : "card_like-hidden"
  }`;

  return (
    <div>
      <div>
        <img
          src={item.imageUrl}
          className="card_image"
          onClick={() => onSelectCard(item)}
          alt={item.name}
        />
      </div>
      <div className="card_name">{item.name} </div>

      {loggedIn ? (
        <img
          className={likeButtonClassName}
          src={heartButton}
          alt="like button"
          onClick={handleLike}
        />
      ) : (
        <img />
      )}
    </div>
  );
};

export default ItemCard;
