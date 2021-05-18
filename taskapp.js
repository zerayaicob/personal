function createItem()
{
    let item = new Object();
    item.time = input("Time: ", "");
    return item;
}

function createList()
{
    let list = new Array(); list.push(createItem());
}