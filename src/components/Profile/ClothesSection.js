import ItemCard from "../ItemCard/ItemCard";
// conditionally render based on current owner
const ClothesSection = ({
  currentUser,
  onSelectCard,
  clothingItems,
  onCardLike,
  loggedIn,
}) => {
  const isOwn = currentUser._id;

  const filteredCards = clothingItems.filter((item) => {
    // return item.weather;
    return item.owner === isOwn;
  });

  return (
    <div className="profile__card-items">
      {filteredCards.map((item) => (
        <ItemCard
          loggedIn={loggedIn}
          item={item}
          onSelectCard={onSelectCard}
          key={item._id}
          onCardLike={onCardLike}
        />
      ))}
    </div>
  );
};

export default ClothesSection;
