import "./Country.css";

export default function Country({ country }) {
  return (
    <div className="Country">
      <div key={country.id} className="Country__item">
        <img className="Country__img" src={country.img} alt={country.name} />
        <div>
          <h1 className="Country__name">{country.name.toUpperCase()}</h1>
          <p className="Country__description">{country.description}</p>
        </div>
      </div>
    </div>
  );
}
