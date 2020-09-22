import { renderHook } from "@testing-library/react-hooks"
import { useFetchGifs } from "../../hooks/useFetchGifs";
import '@testing-library/jest-dom';
import { wait } from "@testing-library/react";



describe('Tests for custom Hook', () => {
    test('should return initial state', async () => {

        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGifs('Goku'));

        const { data, loading } = result.current;
        await waitForNextUpdate();
        expect(data).toEqual([]);
        expect(loading).toBe(true);

    });

    test('should return an image array and loading false', async () => {

        const { result, waitForNextUpdate } = renderHook(() =>
            useFetchGifs('Goku'));

        await waitForNextUpdate();
        const { data, loading } = result.current;

        expect(data.length).toBe(10);
        expect(loading).toBe(false);

        waitForNextUpdate

    });

})