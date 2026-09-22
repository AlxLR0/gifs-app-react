import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { useCounter } from "./useCounter";

describe('useCounter',()=>{
    test('debe iniciar con valor de 5',()=>{
        const {result} = renderHook(()=>useCounter());

        expect(result.current.counter).toBe(5);
    });

    test('debe icrementar cuando handleAdd es llamado',()=>{
        const {result} = renderHook(()=>useCounter());

        act(()=>{
            result.current.handleAdd();
        })

        expect(result.current.counter).toBe(6)
    });
    
    test('debe decrementar cuando handleSubTract es llamado',()=>{
        const {result} = renderHook(()=>useCounter());

        act(()=>{
            result.current.handleSubTract();
        })

        expect(result.current.counter).toBe(4)
    });

    test('debe resetear cuando handleReset es llamado',()=>{
        const {result} = renderHook(()=>useCounter());

        act(()=>{
            result.current.handleReset();
        })

        expect(result.current.counter).toBe(5)
    });
})