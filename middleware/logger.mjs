export function loggerFunc (req, res) {
    console.log(`${req.method} used on ${req.url}`)
};