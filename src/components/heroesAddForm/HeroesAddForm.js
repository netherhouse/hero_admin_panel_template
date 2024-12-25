// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров
import { useHttp } from "../../hooks/http.hook";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import {heroCreated} from "../../actions";

const HeroesAddForm = () => {
const [heroName, setHeroName] = useState("");
const [heroDescr, setHeroDescr] = useState("");
const [heroElement, setHeroElement] = useState("");

const {filter, filtersLoadingStatus} = useSelector((state) => state);
const dispatch = useDispatch();
const {request} = useHttp();

const onSubmitHandler = (e) => {
  e.prevetDefault();
  // Генерация id через библиотеку uuid 
  const  newHero ={
    id: uuidv4(),
    name: heroName,
    description: heroDescr,
    element: heroElement,
  }
// Отправляем данные на сервер в формате JSON
request("http://localhost:3001/heroes", "POST", newHero)
.then(res=> { console.log(res, "Успешная отправка")})
.then(dispatch(heroCreated(newHero)))
.catch(err=> console.log(err))









  return (
    <form className="border p-4 shadow-lg rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
          required
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder="Как меня зовут?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Описание
        </label>
        <textarea
          required
          name="text"
          className="form-control"
          id="text"
          placeholder="Что я умею?"
          style={{ height: "130px" }}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>
        <select required className="form-select" id="element" name="element">
          <option>Я владею элементом...</option>
          <option value="fire">Огонь</option>
          <option value="water">Вода</option>
          <option value="wind">Ветер</option>
          <option value="earth">Земля</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
