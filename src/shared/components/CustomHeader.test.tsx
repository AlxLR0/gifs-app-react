import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import {CustomHeader } from "./CustomHeader";

describe('GifsApp',()=>{
    const title = 'Test Title'

    test('debe renderizar titulo',()=>{
        render(<CustomHeader title={title}></CustomHeader>)
        expect(screen.getByText(title)).toBeDefined();

    });

    test('debe renderizar descripcion',()=>{
        const description = "Test Description";
        render(<CustomHeader title={title} description={description}></CustomHeader>)
        
        expect(screen.getByText(description)).toBeDefined();
        

    });

    test('no debe renderizar descripcion',()=>{
        
        
    });

});