import { render, screen, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import RandomImages from "../RandomImages";

const server = setupServer();

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("renders image when API call succeeds", async () => {
  server.use(
    rest.get("https://api.unsplash.com/photos/random", (req, res, ctx) => {
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
          ],
        })
      );
    })
  );

  render(<RandomImages />);
  await waitFor(() => expect(screen.getByAltText(/brown and black cat/i)).toBeInTheDocument());
});

test("renders error message when API call for images fails", async () => {
  server.use(
    rest.get("https://api.unsplash.com/photos/random", (req, res, ctx) => {
      return res(ctx.status(400));
    })
  )

  render(<RandomImages />);
  await waitFor(() => expect(screen.getByText(/oops/i)).toBeInTheDocument());
});
