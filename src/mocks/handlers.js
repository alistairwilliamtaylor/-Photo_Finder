import { rest } from "msw";

const handlers = [
  rest.get("https://api.unsplash.com/search/photos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          {
            id: "Y0WXj3xqJz0",
            alt_description: "brown and black cat on white background",
            urls: {
              small:
                "https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMzgzNDB8MHwxfHNlYXJjaHwxfHxraXR0ZW58ZW58MHx8fHwxNjU2Mzk1ODAz\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
            },
          },
          {
            id: "JUFIUouii0",
            alt_description: "beige cat with paw in the air",
            urls: {
              small:
                "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzgzNDB8MHwxfHNlYXJjaHwyfHxraXR0ZW58ZW58MHx8fHwxNjU2Mzk1ODAz&ixlib=rb-1.2.1&q=80&w=400",
            },
          },
          {
            id: "JUfgdfgdf99ertii0",
            alt_description: "kitten walking through green grass",
            urls: {
              small:
                "https://images.unsplash.com/photo-1560114928-40f1f1eb26a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzgzNDB8MHwxfHNlYXJjaHwzfHxraXR0ZW58ZW58MHx8fHwxNjU2Mzk1ODAz&ixlib=rb-1.2.1&q=80&w=400",
            },
          },
          {
            id: "dgfsdgiUIU",
            alt_description: "adorable cat sleeping",
            urls: {
              small:
                "https://images.unsplash.com/photo-1611267254323-4db7b39c732c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzgzNDB8MHwxfHNlYXJjaHw0fHxraXR0ZW58ZW58MHx8fHwxNjU2Mzk1ODAz&ixlib=rb-1.2.1&q=80&w=400",
            },
          },
          {
            id: "JUIIDFHi0",
            alt_description: "perky kitten on grey couch",
            urls: {
              small:
                "https://images.unsplash.com/photo-1591871937573-74dbba515c4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzgzNDB8MHwxfHNlYXJjaHw1fHxraXR0ZW58ZW58MHx8fHwxNjU2Mzk1ODAz&ixlib=rb-1.2.1&q=80&w=400",
            },
          },
          {
            id: "324fg!IUouii0",
            alt_description: "kitten thinks that is hilarious",
            urls: {
              small:
                "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzgzNDB8MHwxfHNlYXJjaHw2fHxraXR0ZW58ZW58MHx8fHwxNjU2Mzk1ODAz&ixlib=rb-1.2.1&q=80&w=400",
            },
          },
          {
            id: "JU0fd8ii0",
            alt_description: "kitten look at ma belly",
            urls: {
              small:
                "https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzgzNDB8MHwxfHNlYXJjaHw3fHxraXR0ZW58ZW58MHx8fHwxNjU2Mzk1ODAz&ixlib=rb-1.2.1&q=80&w=400",
            },
          },
          {
            id: "GD5IUouii0",
            alt_description: "three kitten triplets",
            urls: {
              small:
                "https://images.unsplash.com/photo-1570018144715-43110363d70a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzgzNDB8MHwxfHNlYXJjaHw4fHxraXR0ZW58ZW58MHx8fHwxNjU2Mzk1ODAz&ixlib=rb-1.2.1&q=80&w=400",
            },
          },
          {
            id: "POFDIUouii0",
            alt_description: "I'm a warm and cute kitten",
            urls: {
              small:
                "https://images.unsplash.com/photo-1597626259989-a11e97b7772d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzMzgzNDB8MHwxfHNlYXJjaHw5fHxraXR0ZW58ZW58MHx8fHwxNjU2Mzk1ODAz&ixlib=rb-1.2.1&q=80&w=400",
            },
          },
        ],
      })
    );
  }),
];

export { handlers, rest }