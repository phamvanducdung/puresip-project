import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button, Dropdown, Input } from 'antd';
const { Search } = Input;

const SortOptions = {
	'id-asc': 'Sort by popularity',
	'price-asc': 'Low to hight',
	'price-desc': 'Hight to low',
};
export default function ProductHeader() {
	const [searchParams, setSearchParams] = useSearchParams();
	const sortDefault = searchParams.get('sort');
	const [searchValue, setSearchValue] = useState('');
	
	const [sort, setSort] = useState(
		sortDefault ? SortOptions['id-asc'] : 'Sort by popularity'
	);

	function handleOrderProduct(value) {
		setSort(SortOptions[value]);
		setSearchParams((prevParams) => {
			if (!value) {
				prevParams.delete('sort');
			} else {
				prevParams.set('sort', value);
			}
			return prevParams;
		});
	}

	// Set lại dữ liệu đã tìm hoặc trở lại như ban đầu
	function handleSearchProduct(value) {
		setSearchParams((prevParams) => {
			if (!searchValue) {
				prevParams.delete('q');
			} else {
				prevParams.set('q', searchValue);
			}
			return prevParams;
		});
	}

	// Sắp xếp sản phẩm theo giá trị
	const items = [
		{
			key: 'id-asc',
			label: (
				<button onClick={() => handleOrderProduct('id-asc')}>
					Sort by popularity
				</button>
			),
		},
		{
			key: 'price-asc',
			label: (
				<button onClick={() => handleOrderProduct('price-asc')}>
					Low to hight
				</button>
			),
		},
		{
			key: 'price-desc',
			label: (
				<button onClick={() => handleOrderProduct('price-desc')}>
					Hight to low
				</button>
			),
		},
	];

	return (
		<div className="flex flex-row items-center justify-between w-full">
			<div>
				<Search
					size="large"
					className="w-[300px] text-sm"
					placeholder="Search with keyword"
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					onSearch={handleSearchProduct}
					allowClear
				/>
			</div>
			<Dropdown menu={{ items }} placement="bottomLeft">
				<Button size="large">{sort}</Button>
			</Dropdown>
		</div>
	);
}