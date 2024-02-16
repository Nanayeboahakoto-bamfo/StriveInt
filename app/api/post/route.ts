import { NextRequest, NextResponse } from 'next/server';

// Sample data array (replace with your actual data source)
const datas = [
  { id: 1, name: 'Item One' },
  { id: 2, name: 'Another Item' },
  // ... more data items
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';

    const result = datas.filter((data) =>
      data.name.toLowerCase().includes(query.toLocaleLowerCase())
    );

    // Return the filtered data as a response
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    // Handle any errors gracefully
    console.error(error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
