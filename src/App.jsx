import './App.css'
import Card from './components/Card'

function App() {
  return (
    <div>
      <h1 className="heading">Toko Buah</h1>
      <Card 
        name="Apel"
        img="https://th.bing.com/th/id/OIP.t19newAk-AaKOBIRkVnQdgHaE8?w=284&h=189&c=7&r=0&o=5&pid=1.7"
        harga="Rp. 10.000"
        stok="10"
      />
      <Card
        name="Jeruk"
        img="https://th.bing.com/th/id/OIP.xJ8NCo8eYzyag-4z5LtEcgHaDt?w=303&h=175&c=7&r=0&o=5&pid=1.7"
        harga="Rp. 5.000"
        stok="5"
      />
      <Card
        name="Semangka"
        img="https://th.bing.com/th/id/OIP.Y-ssw20_Cu09r-JEBQrAtQHaEK?w=296&h=180&c=7&r=0&o=5&pid=1.7"
        harga="Rp. 8.000"
        stok="8"
      ></Card>
    </div>
  )  
}

export default App
