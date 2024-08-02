import Background from "@/components/background"
import FlatBackground from "@/components/background/flatBackground"
import VintageInternetBackground from "@/components/background/vintageInternetBackground"
import FlatHeader from "@/components/header/flatHeader"
import VintageInternetHeader from "@/components/header/vintageInternetHeader"
import FlatProject from "@/components/project/flatProject"
import VintageInternetProject from "@/components/project/vintageInternetProject"
import FlatProjects from "@/components/projects/flatProjects"
import VintageInternetProjects from "@/components/projects/vintageInternetProjects"

const styleTypes:any = {
    vintageInternet:{
        Background:VintageInternetBackground,
        Header: VintageInternetHeader,
        Projects: VintageInternetProjects,
        Project: VintageInternetProject,
        bg:[
            "https://static.vecteezy.com/system/resources/previews/024/790/022/original/colorful-memphis-style-seamless-pattern-abstract-geometric-shapes-funky-modern-design-and-80s-memphis-style-background-vector.jpg"
        ],
        repeatBg:[
            "https://st2.depositphotos.com/3242059/8796/v/450/depositphotos_87965560-stock-illustration-seamless-geometric-vintage-pattern.jpg",
            "https://img.freepik.com/premium-vector/colorful-memphis-design-seamless-pattern-with-white-background_197792-859.jpg"
        ],
    },
    flat:{
        Background:FlatBackground,
        Header: FlatHeader,
        Projects: FlatProjects,
        Project:FlatProject,
        bg:[
            "https://icon-park.com/imagefiles/noize_background_black.png",
            "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/85a4391e-1fe1-43e3-a637-b88160489a7f/d7jy8hj-44cbef77-ff19-456b-8786-5f9d8673bb7d.jpg/v1/fill/w_1024,h_768,q_75,strp/noise_texture_3__by_eldonhossam_d7jy8hj-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvODVhNDM5MWUtMWZlMS00M2UzLWE2MzctYjg4MTYwNDg5YTdmXC9kN2p5OGhqLTQ0Y2JlZjc3LWZmMTktNDU2Yi04Nzg2LTVmOWQ4NjczYmI3ZC5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Q902KZYUq8525oFo7k9GitiARUyK_IiHvJ8H8Nu2LLk",
            "https://i.pinimg.com/originals/3e/40/90/3e409071cfdd1e9ba61d3da8a5087d8e.jpg",
            "https://static.vecteezy.com/ti/vetor-gratis/p3/7753873-vector-ruido-textura-efeito-fundo-grunge-gratis-vetor.jpg"
        ]
    }
}

export default styleTypes