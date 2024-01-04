import create from 'zustand';

interface CounterState {
    count: number;
    titutlo de la propiedad:  String;
    this.props.agente: String;

    export const useStore = create<CounterState>((set) => ({
        count: 0,
        titulo de la propiedad: "Hello",
        this.props.agente: "John",
        increment: () => set((state) => ({ count: state.count + 1 })),
        decrement: () => set((state) => ({ count: state.count - 1 })),
    }));

    