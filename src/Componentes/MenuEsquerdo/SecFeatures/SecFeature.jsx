import { Component } from "react";
import TodoList from './icon-todo.svg'

export default class SecFeature extends Component {
    render() {
        return (
            <div className="Categorias">
                <div className="TodoList" onMouseOver={Abre}><img src = {TodoList} alt='Todo List' /></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        );
    }
}