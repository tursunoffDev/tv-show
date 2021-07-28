import React from "react";
import { useSelector } from "react-redux";
import { ListItem, List } from "@/components/ListContainer";

export default function SearchResult() {
  const { searchShows } = useSelector((state) => state.shows);

  return (
    <List>
      {searchShows.map((item) => {
        return (
          <ListItem
            key={item.show.id}
            id={item.show.id}
            language={item.show.language}
            genres={item.show.genres}
            url={item.show.url}
            summary={item.show.summary}
            image={
              item.show.image
                ? item.show.image.medium
                : "https://picsum.photos/200/300"
            }
            name={item.show.name}
            rating={
              item.show.rating.average ? item.show.rating.average : "no rating"
            }
          />
        );
      })}
    </List>
  );
}
