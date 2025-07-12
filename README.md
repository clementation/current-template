# Current Template

This is Connor's template for designing websites

Here is his [website](https://connorkealey.design)

# Current Stack
- React w/ TypeScript
- Tanstack Router
- Motion

# Dev Setup
1. Make sure Typescript is installed `npm install -g typescript`
2. `npm i` to install dependencies
3. `npm run dev` for live preview

# To Do
1. Anotate code untill this point
2. Delay before modal closes should not happen when pressing or scroling down. Just when clicking a nav link

# Thoughts
In the data.json file I was thinking about about having a section array containing objects with a type field determining how they're rendered. For instance say section[2].type is "carousell", this would render a subsequent image array into a carousell. Here's a list of posible section types:

- Image
- Carousell
- Grid
- Article (title + paragraph(s))
- Video

It may also be usefull to pair sections that support one another. Maybe pairing a video with an article displays them inline on desktop and places the video inbetween the title and paragraph on mobile. The question is syntax. How would this be indicated in the json file.

Something that I'm more sure about for the gallery is having a "CoverImage" and a "HoverImage" image field in the top level of each item. Conver image being what shows in the gallery, and hover image being gif or seconday image that shows during a hover action. Something like this:

`
[
    {
        "title": "Subject Title",
        "description": "A brief description of the subject material.",
        "coverImage" : {
            "src": "/image-data/Subject.png",
            "alt": "Alt text for accessibility",
        },
        "hoverImage" : {
            src": "/image-data/Subject.png",
            "alt": "Alt text for accessibility",
        }
    }
]
`


Then come the previously mentioned sections:

`
[
    {
        "title": "Subject Title",
        "description": "A brief description of the subject material.",
        "coverImage" : {
            "src": "/image-data/Subject.png",
            "alt": "Alt text for accessibility",
        },
        "hoverImage" : {
            src": "/image-data/Subject.png",
            "alt": "Alt text for accessibility",
        },
        sections [
            {
                "title": "Subject Gallery",
                "type": "grid",
                "images": [
                    {
                        "src": "/image-data/grid-image-1.png",
                        "alt": "Alt text for accessibility",
                    },
                    {
                        "src": "/image-data/grid-image-2.png",
                        "alt": "Alt text for accessibility",
                    },
                ]
            }
        ]
    }
]
`

I'm not exactly sure what this looks like on the rendering side. My thought right now is to have a section component with switch as a sort of lookup contining the other components. If type = "grid" then it knows which component to render the images with.

This sound like a lot to set up, so for now I should focus on creating the components themselves and worry about this high level rendering system later once it would actually help my turn around for clients.




