import Background from "@/components/background"
import CollageBackground from "@/components/background/collageBackground"
import FlatBackground from "@/components/background/flatBackground"
import PunkBackground from "@/components/background/punkBackground"
import VintageInternetBackground from "@/components/background/vintageInternetBackground"
import CollageHeader from "@/components/header/collageHeader"
import FlatHeader from "@/components/header/flatHeader"
import VintageInternetHeader from "@/components/header/vintageInternetHeader"
import CollageProject from "@/components/project/collageProject"
import FlatProject from "@/components/project/flatProject"
import VintageInternetProject from "@/components/project/vintageInternetProject"
import CollageProjects from "@/components/projects/CollageProjects"
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
    collage:{
        Background:CollageBackground,
        Header: CollageHeader,
        Projects: CollageProjects,
        Project: CollageProject,
        bg:[
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aba33f82665583.5d24a257add94.jpg",
            "https://img.freepik.com/free-photo/concrete-wall-scratched-material-background-texture-concept_53876-16281.jpg",
            ],
        repeatBg:[
            "https://icon-park.com/imagefiles/noize_background_black.png",
            "https://img.freepik.com/premium-vector/colorful-memphis-design-seamless-pattern-with-white-background_197792-859.jpg"
        ],
    },
    punk:{
        Background:PunkBackground,
        Header: CollageHeader,
        Projects: CollageProjects,
        Project: CollageProject,
        bg:[
            "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/aba33f82665583.5d24a257add94.jpg",
            "https://img.freepik.com/free-photo/concrete-wall-scratched-material-background-texture-concept_53876-16281.jpg",
            "https://images7.alphacoders.com/131/1316580.jpeg",
            "https://media.istockphoto.com/id/1173351352/photo/sticker-background.jpg?s=612x612&w=0&k=20&c=WFhRx0I_YhGDQqL1Qnf6RF3IiUEJxs0oTtS3ocC5rVA=",
            "https://cdn.donmai.us/sample/11/a3/__spider_punk_marvel_and_3_more_drawn_by_leonardo_vincent__sample-11a39aa86429728014e1fe83e48ec4b6.jpg"
            ],
        repeatBg:[
            "https://icon-park.com/imagefiles/noize_background_black.png",
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