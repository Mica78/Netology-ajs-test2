export default function sortByHealth(array) {
    return array.sort((a, b) => b.health - a.health)
}
