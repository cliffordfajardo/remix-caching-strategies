import { json, type LoaderFunctionArgs } from "@remix-run/node";


type Todo = {
    "userId": number,
    "id": number,
    "title": string,
    "completed": boolean
};

async function fetchTodos() {
    let response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
    );
    return await response.json() as Todo[];
}

export async function loader({ context: { queryClient } }: LoaderFunctionArgs) {
    const todos = await queryClient.fetchQuery({
        queryKey: ["todos"],
        queryFn: fetchTodos,
        // initialData
        // retry
        // retryDelay
    });
    return json({ todos });
}


export default function Index() {
    return (
        <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
            <h1>TEST</h1>
            <ul>
                <li>
                    <a
                        target="_blank"
                        href="https://remix.run/tutorials/blog"
                        rel="noreferrer"
                    >
                        15m Quickstart Blog Tutorial
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        href="https://remix.run/tutorials/jokes"
                        rel="noreferrer"
                    >
                        Deep Dive Jokes App Tutorial
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
                        Remix Docs
                    </a>
                </li>
            </ul>
        </div>
    );
}
