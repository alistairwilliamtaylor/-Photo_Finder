import { render, screen, waitFor } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest, handlers } from "../../mocks/handlers";
import SpecifiedImages from "../SpecifiedImages";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("renders image when API call succeeds", async () => {
  render(<SpecifiedImages />);
  await waitFor(() => {
    expect(screen.getByAltText(/brown and black cat/i)).toBeInTheDocument();
    expect(screen.getByAltText(/paw in the air/i)).toBeInTheDocument();
    expect(screen.getByAltText(/through green grass/i)).toBeInTheDocument();
    expect(screen.getByAltText(/adorable cat sleeping/i)).toBeInTheDocument();
    expect(screen.getByAltText(/kitten on grey couch/i)).toBeInTheDocument();
    expect(screen.getByAltText(/that is hilarious/i)).toBeInTheDocument();
    expect(screen.getByAltText(/kitten look at ma belly/i)).toBeInTheDocument();
    expect(screen.getByAltText(/three kitten triplets/i)).toBeInTheDocument();
    expect(screen.getByAltText(/warm and cute kitten/i)).toBeInTheDocument();
  });
});

test("renders error message when API call for images fails", async () => {
  server.use(
    rest.get("https://api.unsplash.com/search/photos", (req, res, ctx) => {
      return res(ctx.status(400));
    })
  );

  render(<SpecifiedImages />);
  await waitFor(() => expect(screen.getByText(/oops/i)).toBeInTheDocument());
});
