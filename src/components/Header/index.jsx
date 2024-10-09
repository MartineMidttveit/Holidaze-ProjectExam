import HeartIcon from "../SVG/HeartIcon"

export default function Header() {
    return(
        <header>
            <div className="bg-contrast h-10">Hei</div>

            <div className="flex justify-between items-center bg-background h-20">
                <span>Holidaze</span>

                <nav className="flex items-center gap-4">
                    <p>Home</p>
                    <p>Contact</p>
                    <p>Venues</p>
                </nav>

                <nav className="flex gap-4 items-center">
                    <HeartIcon/>
                    <span>
                        <img src="germany.png" alt="" className="object-cover h-12 w-12 rounded-full" />
                    </span>
                </nav>
            </div>
        </header>
        
        

    )
}