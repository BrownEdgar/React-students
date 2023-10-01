export default function Photos({ photos }) {
  return (
    <div className="App-item">
      <p>Album Id: {photos.albumId}</p>
      <p>ID: {photos.id}</p>
      <p>Title: {photos.title}</p>
      <p>Photo: </p>
        <img src={photos.url} alt="photo" />
    </div>
  );
}
