"use client";
import axios, { Axios } from "axios";
import { useEffect, useState, useMemo } from "react";

import PokemonCard from "@/components/molecules/Card/card";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Input from "@/components/atoms/Input/input";
import Button from "@/components/atoms/Button/button";
import { Search } from "lucide-react";

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonName, setPokemonName] = useState("")

  const pokemonsPerPage = 12;

  useEffect(() => {
    getPokemon();
  }, []);

  const getPokemon = () => {
    const endpoints = [];
    for (let i = 1; i < 50; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }

    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((response) => setPokemons(response));
  };

  const searchPokemon = () => {
    if (!pokemonName.trim()){
      getPokemon();
      return
    };
  
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`)
      .then((response) => {
        setPokemons([response]);
        setCurrentPage(1);
      })
      .catch((error) => {
        console.error("Pokémon não encontrado:", error);
        setPokemons([]);
      });
  };


  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = pokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);

  const totalPages = Math.ceil(pokemons.length / pokemonsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-between pt-30">
      <div className="flex items-center justify-between gap-6">
          
          <Input placeholder="Busque pelo nome do Pokemon.." type="text" onChange={(event) => {setPokemonName(event.target.value)}} onKeyDown={(e) => { if (e.key === "Enter") searchPokemon()}} className="w-96"/>
          <Button onClick={searchPokemon} className="text-[#004FAA]"> Search Pokemon </Button>
        </div>
      <div className="grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3 md:pl-6 lg:grid-cols-4 xl:grid-cols-6 xl:gap-6 xl:pr-6">
        
        {currentPokemons.map((pokemon, key) => (
          <PokemonCard
            key={key}
            image={pokemon.data.sprites.front_default}
            name={pokemon.data.name}
            types={pokemon.data.types}
          />
        ))}
      </div>

      <div className="py-3">
        <Pagination>
          <PaginationContent className="text-[#004FAA]">
            <PaginationItem>
              <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
            </PaginationItem>

            {Array.from({ length: totalPages }, (_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  isActive={currentPage === i + 1}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem>
              <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
