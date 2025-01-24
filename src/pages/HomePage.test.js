import Homepage from "./HomePage";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";

describe("Home Page", () => {
  it("should 'Bienvenido'", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    );

    const welcomeMsg = getByTestId("welcome").textContent;
      expect(welcomeMsg).toEqual("Bienvenido");

  });
});
