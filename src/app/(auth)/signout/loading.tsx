import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from '@/components/page-header'
import { Shell } from '@/components/shells/shell'
import { Skeleton } from '@/components/ui/skeleton'

export default function SignOutLoading() {
  return (
    <Shell className="max-w-xs">
      <PageHeader className="text-center">
        <PageHeaderHeading size="sm">Sair</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Você tem certeza de que deseja sair?
        </PageHeaderDescription>
      </PageHeader>
      <div className="flex w-full items-center space-x-2">
        <Skeleton className="h-8 w-20" />
        <Skeleton className="h-8 w-20" />
      </div>
    </Shell>
  )
}
