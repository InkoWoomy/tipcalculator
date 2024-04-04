import { Button } from "flowbite-react"

export function GroupInputComponent(props: {onChange: (e: React.ChangeEvent<HTMLInputElement>) => void}) {
    return (
      
        <div className="rounded-md flex mt-5 justify-center">
            <div className="px-4 py-1 m-3 rounded-md bg-slate-300 text-black text-lg">
                <input
                type="number"
                name="per person"
                className="rounded-md px-3 text-left placeholder:text-gray-400 text-lg"
                placeholder="Enter Number of People"
                onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
                onChange={props.onChange}
                />
            </div>
            
          
        </div>
      
    )
  }

