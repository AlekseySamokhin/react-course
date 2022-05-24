import React from "react";
import ReactDom from "react-dom";

import UserCard from "./UserCard";
import CounterClass from "./CounterClass";
import CounterFn from "./CounterFn";

ReactDom.render(
  <div className="some">
    <h2>Hello, World!</h2>
    <hr />
    <CounterClass />
    <CounterFn />
    <hr />
    <div>Text</div>
    <UserCard name="Dmitriy" text="Hi there" />
    <UserCard name="Dmitrifffy" text="Hi tfffhere" />
    <UserCard name="Dmitrfddaafdaiy" text="Hi tagdagaagdsaghere" />
  </div>,
  document.querySelector(".app")
);
