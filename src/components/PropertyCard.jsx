import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../redux/favoritesSlice";
// Day 1: data is hardcoded directly in the component on purpose.
// Day 2 will refactor this to accept props and map over an array instead.
export default function PropertyCard({ property }) {
  const { id, title, location, price, beds, baths, sqft, featured, image } =
    property;
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorited = favorites.includes(id);
  const handleFavoriteClick = (e) => {
    e.preventDefault(); // stops click from triggering navigation <link> also.
    dispatch(toggleFavorite(id));
  };
  return (
    // <Link
    // to={`/property/${id}`}
    // className="group bg-white rounded-2xl border border-line overflow-hidden hover:shadow-lg hover:shadow-ink/5 transition-shadow"
    // >
    <Link
      to={`/property/${id}`}
      className="group bg-white rounded-2xl border border-line overflow-hidden hover:shadow-lg hover:shadow-ink/5 transition-shadow block relative"
    >
      <button
        onClick={handleFavoriteClick}
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-lg"
      >
        {isFavorited ? "♥" : "♡"}
      </button>

      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {featured && (
          <span className="absolute top-3 left-3 bg-ink text-sand text-xs font-body px-3 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between">
          <h3 className="font-display text-lg text-ink">{title}</h3>
          <span className="font-display text-lg text-brass">
            {price}
            <span className="text-xs text-ink/40 font-body">/mo</span>
          </span>
        </div>

        <p className="font-body text-sm text-sage mt-1">{location}</p>

        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-line font-body text-sm text-ink/60">
          <span>{beds} beds</span>
          <span className="w-1 h-1 rounded-full bg-ink/20" />
          <span>{baths} baths</span>
          <span className="w-1 h-1 rounded-full bg-ink/20" />
          <span>{sqft} sqft</span>
          <span className="w-1 h-1 rounded-full bg-ink/20" />
          <span>Parking</span>
        </div>
      </div>
    </Link>
  );
}
