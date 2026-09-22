import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { MyCounterApp } from "./MyCounterApp";

describe("MyCounterApp", () => {
	test("debe mostrar el contador inicial en 5", () => {
		render(<MyCounterApp />);

		expect(screen.getByText("Counter: 5")).toBeTruthy();
	});

	test("debe incrementar el contador al pulsar +1", () => {
		render(<MyCounterApp />);

		fireEvent.click(screen.getByRole("button", { name: "+1" }));

		expect(screen.getByText("Counter: 6")).toBeTruthy();
	});

	test("debe decrementar el contador al pulsar -1", () => {
		render(<MyCounterApp />);

		fireEvent.click(screen.getByRole("button", { name: "-1" }));

		expect(screen.getByText("Counter: 4")).toBeTruthy();
	});

	test("debe reiniciar el contador al pulsar Reset", () => {
		render(<MyCounterApp />);

		fireEvent.click(screen.getByRole("button", { name: "+1" }));
		fireEvent.click(screen.getByRole("button", { name: "Reset" }));

		expect(screen.getByText("Counter: 5")).toBeTruthy();
	});
});
