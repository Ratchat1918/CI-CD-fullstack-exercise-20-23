import { useApi } from './useApi'
import './App.css'
function App() {
  const { data, loading, error } = useApi();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  const ImageArray = data.collection.items.map((item) => item.links[0].href);
  return (
    <>
    <div className="header">
      <h1>NASA Airshow pictures 2020-2026</h1>
    </div>
    <div className="image-container">
      {ImageArray.map((image, index) => (
        <img key={index} src={image} alt={`NASA Image ${index}`} />
      ))}
      </div>
    </>
  )
}

export default App
