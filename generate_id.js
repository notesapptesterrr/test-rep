export default generateId(prefix,legnth=10)
{
    let res = "";
    for(let i; i < 10; i++)
    {
        res+=String(i);
    }
    return prefix+res
}
//comment