
export interface ISolutionList {
    code: string
    text: string
}
export const SolutionList: ISolutionList[] = [ {
    code: 
`import { useState } from "react";

interface NestedObject {
    [key: string]: NestedObject | any;
}

interface MyComponentProps {
    initialData: NestedObject;
}

const MyComponent: React.FC<MyComponentProps> = ({ initialData }) => {
    const [data, setData] = useState<NestedObject>(initialData);

    const updateNestedObject = (
        obj: NestedObject,
        key: string,
        value: any
    ): NestedObject => {
        const keys = key.split(".");
        const currentKey = keys.shift()!;

        if (keys.length === 0) {
            return { ...obj, [currentKey]: value };
        }

        return {
            ...obj,
            [currentKey]: updateNestedObject(obj[currentKey], keys.join("."), value)
            };
        };

        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setData(prevData =>
            updateNestedObject(prevData, name, value)
        );
    };

    return (
        <div>
            <input
                type="text"
                name="foo.bar.baz"
                value={data.foo.bar.baz}
                onChange={handleInputChange}
            />
        </div>
    );
};

export default MyComponent;`   ,
    text: "Пример использования хука useState в функциональном React с TypeScript для изменения бесконечно вложенного объекта по названию ключа."
},{
    text:"Пример использования хука useState в функциональном React с TypeScript для реализации веб сокетов",
    code:
`import React, { useEffect, useState } from "react";
import io from "socket.io-client";

interface Message {
    id: number;
    content: string;
}

const socket = io("http://localhost:3000"); // подключение к серверу сокетов

const WebSocketComponent: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        socket.on("connect", () => {
            console.log("Connected to server");
        });

        socket.on("newMessage", (message: Message) => {
            setMessages(prevMessages => [...prevMessages, message]);
        });

        return () => {
            socket.disconnect(); // отключение от сервера при размонтировании компонента
        };
    }, []);

    const handleSendMessage = () => {
        const message: Message = {
        id: Math.floor(Math.random() * 1000),
            content: "Hello from client"
        };
        socket.emit("sendMessage", message);
    };

    return (
        <div>
            <ul>
                {messages.map(message => (
                    <li key={message.id}>{message.content}</li>
                ))}
            </ul>
            <button onClick={handleSendMessage}>Send Message</button>
        </div>
    );
};

export default WebSocketComponent;
`
},{
    text:`Пример использования хука useState в функциональном React с TypeScript для изменения объекта`,
    code:
`import React, { useState } from "react";

interface Person {
    name: string;
    age: number;
}

const ObjectComponent: React.FC = () => {
const [person, setPerson] = useState<Person>({ name: "", age: 0 });

const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerson(prevPerson => ({
        ...prevPerson,
        name: event.target.value
    }));
};

const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPerson(prevPerson => ({
        ...prevPerson,
        age: parseInt(event.target.value, 10)
        }));
    };

    return (
        <div>
            <label>
                Name:
                <input type="text" value={person.name} onChange={handleNameChange} />
            </label>
            <label>
                Age:
                <input type="number" value={person.age} onChange={handleAgeChange} />
            </label>
            <p>{\`Name: \${person.name}, Age: \${person.age}\`}</p>
        </div>
    );
};

export default ObjectComponent;
`
}
,{
    text:`Пример использования ref в функциональном React с TypeScript `,
    code:
`import React, { useRef } from "react";

const RefComponent: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
};

export default RefComponent;

`
},{
    text:`Пример использования axios post в функциональном React с TypeScript `,
    code:
`import React, { useState } from "react";
import axios from "axios";

interface FormData {
  firstName: string;
  lastName: string;
}

const PostDataComponent: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: ""
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://example.com/api/user",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PostDataComponent;

`
},{
    text:`Пример использования axios get в функциональном React с TypeScript `,
    code:
`import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
  email: string;
}

const GetDataComponent: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<User[]>("https://example.com/api/users");
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Users:</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GetDataComponent;
`
},{
    text:"реализовать асинхронное отслеживания размера экрана в функциональном React с TypeScript ",
    code:
`import React, { useState, useEffect } from "react";

const ScreenSizeComponent: React.FC = () => {
    const [screenSize, setScreenSize] = useState({ width: window.innerWidth, height: window.innerHeight });

    useEffect(() => {
        const handleResize = () => {
        setScreenSize({ width: window.innerWidth, height: window.innerHeight });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            <p>Width: {screenSize.width}</p>
            <p>Height: {screenSize.height}</p>
        </div>
    );
};

export default ScreenSizeComponent;
`
},{
    text:"как узнать на какой глубине находится элемент в объекте в в функциональном компоненте React с TypeScript:",
    code:
`interface Person {
    name: string;
    age: number;
    children?: Person[];
}

const findDepth = (obj: Person, targetName: string, depth: number = 0): number | null => {
    if (obj.name === targetName) {
        return depth;
    }

    if (obj.children) {
        for (let i = 0; i < obj.children.length; i++) {
            const result = findDepth(obj.children[i], targetName, depth + 1);
            if (result !== null) {
                return result;
            }
        }
    }

    return null;
};

const person: Person = {
    name: "Alice",
    age: 30,
    children: [
        {
        name: "Bob",
        age: 5,
        },
        {
        name: "Charlie",
        age: 7,
        children: [
            {
            name: "David",
            age: 2,
            },
        ],
        },
    ],
};

console.log(findDepth(person, "Alice")); // 0
console.log(findDepth(person, "Bob")); // 1
console.log(findDepth(person, "David")); // 2
console.log(findDepth(person, "Eve")); // null
`
}
];


