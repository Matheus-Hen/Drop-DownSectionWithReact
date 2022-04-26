import { Component } from "react";
import './MenuEsquerdoStyle.css';
import SecFeature from './SecFeatures/SecFeature'
export default class MenuEsquerdo extends Component {
    render() {
        function Abre(){
            SecFeature.
        }
        return (
            <div className="Categorias">
                <div onMouseOver={Abre}>Features</div>
                <div>Company</div>
                <div>Careers</div>
                <div> About </div>
            </div>
        );
    }
}