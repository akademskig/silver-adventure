
export const capitalize = (string: string) => {
    return string.split("").map((c: string, i: number) =>
        i == 0 ? c.toLocaleUpperCase() : c
    ).join("")
}