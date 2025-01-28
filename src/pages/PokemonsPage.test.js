import { __esModule } from "@babel/preset-env";
import { UserProviderWrapper } from "../context/user.context";
import PokemonsPage from "./PokemonsPage";
import { fireEvent, render } from "@testing-library/react";

jest.mock("../components/PokemonList.jsx", () => {
  return {
    __esModule: true,
    default: () => <></>,
  };
});

describe("Pokemons Page", () => {
  it("Welcome text should be 'Bienvenido Diego", () => {
    const { getByTestId } = render(
      <UserProviderWrapper>
        <PokemonsPage />
      </UserProviderWrapper>
    );

    const userWelcome = getByTestId("user-bienvenido").textContent;
    expect(userWelcome).toEqual("Bienvenido Diego");
  });

  it("Welcome text should change to 'Bienvenido Pedro' after clicking the button", () => {
    const { getByRole, getByTestId } = render(
      <UserProviderWrapper>
        <PokemonsPage />
      </UserProviderWrapper>
    );
    const changeNameBtn = getByRole("button", { name: "Change Name" });
    fireEvent.click(changeNameBtn);

    const userWelcome = getByTestId("user-bienvenido").textContent;
    expect(userWelcome).toEqual("Bienvenido Pedro");
  });
});
