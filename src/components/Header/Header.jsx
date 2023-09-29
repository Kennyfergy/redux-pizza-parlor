import TotalPrice from "../TotalPrice/TotalPrice";

export default function Header () {
    return (
        <header className="App-header">
          <h1 className="App-title">KJM Pizza</h1>
          <div className="totalPrice">
            <TotalPrice />
          </div>
        </header>
    );
}