export interface StaticData {
    header_section: any,
    short_introduction: any,
    about_section: any,
    skills: any,
    education_section: any,
    experience_section: {
        section_title?: string,
        sub_title: string,
        data: {
            year?: string,
            title?: string,
            designation?: string,
            description?: string,
            logo?: string
        }[],
    },
    service_section: any,
    portfolio_section: any,
    testimonial_section: any,
    contact_section: any,
    blog_section: any,

    footer_section: {
        topCard?: {
            title?: string,
            subtitle?: string,
            hireButton?: {
                title?: string,
                href?: string,
            }
        },
        logo_letter?: string,
        description?: string,
        service_links?: {
            href?: string,
            title?: string,
        }[],
        about_links?: {
            href?: string,
            title?: string,
        }[],
        contact_info?: {
            phone?: string,
            email?: string,
            address?: string,
        },
        showSocialIcons?: boolean,
    },

    social_links: {
        facebook?: {
            title?: string,
            href?: string,
            icon?: any,
        },
        linkedin?: {
            title?: string,
            href?: string,
            icon?: any,
        },
        github?: {
            title?: string,
            href?: string,
            icon?: any,
        },
        twitter?: {
            title?: string,
            href?: string,
            icon?: any,
        },
        behance?: {
            title?: string,
            href?: string,
            icon?: any,
        },
    },
}