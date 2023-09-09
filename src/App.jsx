/* eslint-disable react/prop-types */
import calLogo from "./assets/logo.svg";
import "./index.css";

export default function App() {
    return (
        <>
            <Logo />
            <TipCalculator />
        </>
    );
}

function Logo() {
    return (
        <div>
            <img src={calLogo} alt="" />
        </div>
    );
}

function Button({ onClick, children }) {
    return (
        <button className="button" onClick={() => onClick()}>
            {children}
        </button>
    );
}

function TipCalculator() {
    return (
        <div className="tip-container">
            <div className="left-grid"></div>
            <div className="right-grid">
                <CalculateTip />
                <Button>RESET</Button>
            </div>
        </div>
    );
}

function CalculateTip() {
    return (
        <div>
            <div className="total-container">
                <div>
                    <p>Tip Amount</p>
                    <span>/ person</span>
                </div>

                <div className="bill-amount">
                    <p>$4.27</p>
                </div>
            </div>

            <div className="total-container">
                <div className="bill-desc">
                    <p>Total</p>
                    <span>/ person</span>
                </div>

                <div className="bill-amount">
                    <p>$32.79</p>
                </div>
            </div>
        </div>
    );
}
