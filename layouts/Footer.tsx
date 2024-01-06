import Container from 'components/Container'
import { Label } from 'components/atoms/footer-section-label'
import { Separator } from 'components/molecules/separator'
import { SocialLinks } from 'components/molecules/social-links'
import { WebsiteLinks } from 'components/molecules/website-links'
import links from 'data/links'

export default function Footer() {
  return (
    <footer className="py-16 bg-slate-50 border-t flex">
      <Container>
        <Label value="websites" />
        <Separator />
        <div className="mt-4 flex flex-col">
          <WebsiteLinks
            link={links.portfolio}
            description={'Portfolio para concentrar informações sobre mim.'}
          />
        </div>
      </Container>
      <Container>
        <Label value="social" />
        <Separator />
        <div className="mt-4 flex flex-col">
          <SocialLinks />
        </div>
      </Container>
    </footer>
  )
}
