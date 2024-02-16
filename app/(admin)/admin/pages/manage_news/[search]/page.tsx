import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const SearchResut = ({ params }: { params: { search: string } }) => {
    const {search} = params.search;
  return (
    <div>SearchResut </div>
  )
}

export default SearchResut