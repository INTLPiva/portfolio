import "./styles.css";
import Typewriter from "typewriter-effect";

export function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Desenvolvedor Front-End", "Engenheiro de computação"],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}
