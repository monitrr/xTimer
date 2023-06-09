export default function Stats() {
    var time = 0;
    var timeParsed = time.toFixed(2);
    return (
        <div className="w-full flex flex-col flex-[0.6] justify-center">
            <div className="h-full w-full gap-[0.375rem] justify-left grid grid-flow-col">
                <Stat1 />
                <Stat2 />
                <Stat3 />
            </div>
        </div>
    )
}

function Stat1() {
    return (
        <div className="flex flex-col bg-x-500 rounded-tl-2xl p-4">
            <h1>Stat 1</h1>
        </div>
    )
}

function Stat2() {
    return (
        <div className="flex flex-col bg-x-500 p-4">
            <h1>Stat 2</h1>
        </div>
    )
}

function Stat3() {
    return (
        <div className="flex flex-col bg-x-500 rounded-tr-2xl p-4">
            <h1>Stat 3</h1>
        </div>
    )
}