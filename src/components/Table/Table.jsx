import React from 'react';
import { Table, Typography, Image } from 'antd';
import { pokemonData } from "../../pokemon.js";

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <Typography.Text copyable>{text}</Typography.Text>
    },
    {
        title: 'Number',
        dataIndex: 'number',
        key: 'number',
    },
    {
        title: 'Class',
        dataIndex: 'classification',
        key: 'classification',
        filters: [
            {
                text: "Seed Pokémon",
                value: "Seed Pokémon"
            },
            {
                text: "Lizard Pokémon",
                value: "Lizard Pokémon"
            },
            {
                text: "Flame Pokémon",
                value: "Flame Pokémon"
            },
            {
                text: "Tiny Turtle Pokémon",
                value: "Tiny Turtle Pokémon"
            },
            {
                text: "Turtle Pokémon",
                value: "Turtle Pokémon"
            },
            {
                text: "Worm Pokémon",
                value: "Worm Pokémon"
            },
            {
                text: "Bird Pokémon",
                value: "Bird Pokémon"
            },
            {
                text: "Tiny Bird Pokémon",
                value: "Tiny Bird Pokémon"
            },
            {
                text: "Poison Bee Pokémon",
                value: "Poison Bee Pokémon"
            },
            {
                text: "Mouse Pokémon",
                value: "Mouse Pokémon"
            },
            {
                text: "Cocoon Pokémon",
                value: "Cocoon Pokémon"
            },
            {
                text: "Butterfly Pokémon",
                value: "Butterfly Pokémon"
            },
            {
                text: "Hairy Pokémon",
                value: "Hairy Pokémon"
            },
        ],
        onFilter: (value, record) => record.classification.includes(value)
    },
    {
        title: 'Maximum HP',
        dataIndex: 'maxHP',
        key: 'maxHP',
        sorter: (a, b) => a.maxHP - b.maxHP,
    },
    {
        title: 'Maximum CP',
        dataIndex: 'maxCP',
        key: 'maxCP',
    },
    {
        title: 'Image',
        dataIndex: 'image',
        key: 'image',
        render: (link) => <Image src={link} width={150} />
    },
];

const dataPokemons = pokemonData.map((item) => ({ ...item, key: item.id }));

const _Table = ({ rows=20 }) => {

    return (
        <>
            <Table
                dataSource={dataPokemons}
                columns={columns}
                pagination={{
                    pageSize: rows,
                    // defaultPageSize: "20", // количество по умоллчанию
                    showSizeChanger: false, // включить выбор количества
                    // pageSizeOptions: [20, 50, 100] // варианты выбора
                }}
            />
        </>
    );
}
export default _Table;