import { ReactElement } from 'react'
import Grid from '@mui/material/Grid'
import * as S from './styles'
import { Typography } from '../../Typography'
import { Skillbar, CircularSkillbar, MotionBox } from '@/components'

interface TechnicalSKills {
  id: number
  name: string
  percentage: number
}

interface ProfessionalSkills {
  id: number
  caption: string
  text: string
  percentage: number
}
interface SkillsProps {
  technicalSKills: {
    title: string
    skills: TechnicalSKills[]
  }
  professionalSkills: {
    title: string
    skills: ProfessionalSkills[]
  }
}

function Skills({
  technicalSKills,
  professionalSkills,
}: SkillsProps): ReactElement {
  return (
    <S.Container container alignItems="flex-start" justifyContent="center">
      <Grid item xl={6} sm={5}>
        <MotionBox delay={0.3}>
          <Typography
            variant="h4"
            fontWeight={700}
            align="center"
            margin=" 0 0 30px"
          >
            {technicalSKills.title}
          </Typography>
          {technicalSKills.skills.map((skill) => (
            <Skillbar
              key={skill.id}
              name={skill.name}
              percentage={skill.percentage}
            />
          ))}
        </MotionBox>
      </Grid>
      <S.RightWrapper item xl={6} sm={7}>
        <MotionBox delay={0.5}>
          <Typography
            variant="h4"
            fontWeight={700}
            align="center"
            margin=" 0 0 30px"
          >
            {professionalSkills.title}
          </Typography>
          {professionalSkills.skills.map((skill) => (
            <Grid
              key={skill.id}
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
              mb={1}
            >
              <Grid item sm={3}>
                <CircularSkillbar percents={skill.percentage} />
              </Grid>
              <Grid item sm={9}>
                <Typography>
                  <b>{skill.caption}</b>: {skill.text}
                </Typography>
              </Grid>
            </Grid>
          ))}
        </MotionBox>
      </S.RightWrapper>
    </S.Container>
  )
}

export { Skills }
