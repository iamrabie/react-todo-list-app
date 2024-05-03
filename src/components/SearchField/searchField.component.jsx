const SearchField = () =>
{
    return(
        <>
        <div className="flex gap-x-3">
            <input type="text" placeholder="e.g Exercise" className="border w-full px-3 py-4 border border-slate-300 outline-none"/>
            <button className="px-2 py-4 w-[110px] border bg-blue-400 text-white font-semibold">Add Task</button>
        </div>
        </>
    );
}

export default SearchField;