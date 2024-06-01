const upstashRedisUrl = process.env.UPSTASH_REDIS_REST_URL;
const upstashToken = process.env.UPSTASH_REDIS_REST_TOKEN;

type Command = "zrange" | "sismember" | "get" | "smembers";

export async function fetchRedis(
    command: Command,
    ...args: (string | number)[]
) {
    const commandURL = `${upstashRedisUrl}/${command}/${args.join("/")}`;

    const response = await fetch(commandURL, {
        headers: {
            Authorization: `Bearer ${upstashToken}`,
        },
        cache: "no-store",
    });

    if (!response.ok) {
        return new Error(
            `Error executing Redis command: ${response.statusText}`
        );
    }

    const data = await response.json();
    return data.result;
}
