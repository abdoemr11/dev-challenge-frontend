export type ListType = "all" | "active" | "completed";
export interface Todo {
    text: string;
    isFinished: boolean;
    id: number
}