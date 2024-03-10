import { Basketball, MopedFront } from '@phosphor-icons/react'
import { usePathname, useSearchParams } from 'next/navigation'
import CategoryBox from '../CategoryBox'
import Container from '../Container'





export const categories = [
  {
    label: 'Modern',
    icon: Basketball,
    description: 'This property is modern!'

  },
  {
    label: 'Modern',
    icon: MopedFront,
    description: 'This property is modern!'

  },
  {
    label: 'Modern',
    icon: MopedFront,
    description: 'This property is modern!'

  }
]






export default function Categories() {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
        pt-4
        flex
        flex-row
        items-center
        justify-between
        overflow-x-auto
      "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            selected={category === item.label}
            icon={item.icon} />
        ))}
      </div>
    </Container>
  )
}
