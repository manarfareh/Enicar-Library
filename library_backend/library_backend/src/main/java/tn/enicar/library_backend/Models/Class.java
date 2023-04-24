package tn.enicar.library_backend.Models;

public enum Class {
    info1,info2,info3,meca1,meca2,meca3,gsil1,gsil2,gsil3,infot1,infot2,infot3,m_tic,m_arti,m_mpsdm;
    public static Class setClassName(String className) {
        switch(className) {
            case "info1":
                return Class.info1;
            case "info2":
                return Class.info2;
            case "info3":
                return Class.info3;
            case "meca1":
                return Class.meca1;
            case "meca2":
                return Class.meca2;
            case "meca3":
                return Class.meca3;
            case "gsil1":
                return Class.gsil1;
            case "gsil2":
                return Class.gsil2;
            case "gsil3":
                return Class.gsil3;
            case "infot1":
                return Class.infot1;
            case "infot2":
                return Class.infot2;
            case "infot3":
                return Class.infot3;
            case "m_tic":
                return Class.m_tic;
            case "m_arti":
                return Class.m_arti;
            case "m_mpsdm":
                return Class.m_mpsdm;
            default:
                throw new IllegalArgumentException("Invalid class name: " + className);
        }
    }


}
